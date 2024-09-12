const { createApp } = Vue;

createApp({
    data: () => ({
        message: 'Hello Vue!',
        alignmentText: '',
        solo: null,
        highlight: null,
    }),
    methods: {
        toggleSolo(key) { this.solo = this.solo === key ? null : key; },
        toggleHighlight(key) { this.highlight = this.highlight === key ? null : key; }
    },
    computed: {
        alignment() {
            return this.alignmentText.split('\n').reduce((res, line) => {
                line = line.trim();
                line.startsWith('>') ? res[line] = '' : (Object.keys(res).length && (res[Object.keys(res).pop()] += line));
                return res;
            }, {});
        },
        alignmentKeys() { return Object.keys(this.alignment); },
        columns() { return Array.from({ length: this.numberOfColumns }, (_, i) => i); },
        charOpacity() { return 1 / this.alignmentKeys.length; },
        numberOfColumns() {
            const values = Object.values(this.alignment);
            return values.length ? Math.max(...values.map(v => v.length)) : 0;
        }
    }
}).mount('#app');
