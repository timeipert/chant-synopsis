const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            alignmentText: '',
            solo: null,
            highlight: null,
        };
    },
    methods: {
        doSolo(key) {
            if (key === this.solo) {
                this.solo = null;
            } else {
                this.solo = key;
            }
        },
        doHighlight(key) {
            if (key === this.highlight) {
                this.highlight = null;
            } else {
                this.highlight = key;
            }
        }

    },
    computed: {
        alignment() {
            const lines = this.alignmentText.split('\n');
            const result = {};
            let currentHeader = '';

            lines.forEach(line => {
                line = line.trim();
                if (line.startsWith('>')) {
                    // New header line
                    currentHeader = line;
                    result[currentHeader] = '';
                } else if (currentHeader) {
                    // Append sequence to current header
                    result[currentHeader] += line;
                }
            });

            return result;
        },

        alignmentKeys() {
            return Object.keys(this.alignment)
        },
        columns() {
            return Array.apply(null, Array(this.numberOfColumns)).map(function (x, i) {
                return i;
            })
        },
        charOpacity() {
            return 1 / this.alignmentKeys.length;
        },
        numberOfColumns() {
            const values = Object.values(this.alignment)
            if (values.length) {
                return Math.max(...values.map((v) => v.length));
            } else {
                return 0;
            }
        }
    }
}).mount('#app');