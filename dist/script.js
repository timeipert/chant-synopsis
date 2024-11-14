const { createApp } = Vue;

createApp({
    data: () => ({
        message: 'Hello Vue!',
        alignmentText: '>Aa13\n' +
            'glllnl---klkmllg-llnlkjhlkkklk-kghgghkjklnmnlkkkklkmlkhkkjhk---hhkk------------------kmlkkklkkjhkhkml-lhkkh-----hkhkjghggkjkllllllmnmmmllmljklllnml-------------------------------kkjhg\n' +
            '>Be40078\n' +
            'glllnl---klkmllg-lnlkjhkklkkkl-kghgghk-jkllkkkklkmlkkhkkjhkh---hkkk------------------mlkkkkljkjhkhkml-lhkkk---hhhkhkjghggkjkllllllnmmmllmljklllnml----------------------------------khg\n' +
            '>Be792\n' +
            'glllnl---klkmllg-lmlkjh--lkkkl-kghgghk-klnmnlkkkklkmlkkhhkhk---hhk-------------------kkmlkkkklkjkhkml-ghk------hhkjhkghggkjkllllllnmmmllmljkllllmnmlkk------------------------------jhg\n' +
            '>Ful62\n' +
            'glllnl---klkmllg-lmlkjhkklkkkl-kghgghk-klnmnlkkkklkmlkkkhkhh-------------------------kkkmlkkkklkkhkml-ghkkj---hhhkhjkghggkjkllllllnmmmllmljklllmnmlk--------------------------------hgh\n' +
            '>Gr807\n' +
            'glllml---klkmllg-lmlkjhkklkkkl-kghgghk-klmnlkkkklkmlkjkhkjk----jhkhh---------kjkkm---lkkklklkkjhkhkml-lhkkk---hhhkhjkghggjkllllllmmmmllmljklllnl------------------------------------khg\n' +
            '>Ka5\n' +
            'glllnl---klkmllh-lmlkjhkklkkkl-kghgghk-jklnmnlkkkklkmlkkkhkk---kjkhh---------kj------kkmlkkklkkhkhkml--hkkh---hhkjhjkghggkjkllllmmmllmljkllmnmlkkkjkhgkjkl-----------------l-mnmlkkjkhg\n' +
            '>Klo407\n' +
            'glllmlkkkklkmllg-lmlkjhkklkkklkkghgghk-klmnlkkkklkmlkjkkkkhk---jkjkhh-----kjkkmlkkkkkkkkklklkkjhkhkml-hkkkk---hhkhjkghgg---------------------------------------------------------------\n' +
            '>KönD\n' +
            'glllnl---klkmllg-lnlkjhkklkkklkkghgghk-jkllkkkklkmlkjkkhkkhk---hkkk------------------mlkjkkljkjhkhkml--hkkk---hhhkhkjghggkjkllllllnmmmmllmljklllnmlkkjhg----------------------lnmlkkjhg\n' +
            '>Mod7\n' +
            'glllmlkkkklkmllgllmlkjhkklkkklkkghgghk-klmnlkkkklkmlkkkkkhjk---jkjjh---------kjkkml--kkkkkkkljkjjhkml-hkkkk---hhkhjkghgg---------------------------------------------------------------\n' +
            '>MüU156\n' +
            'glllml-kjklkmllg-lmlkjhjklkkklkkghgghk-jklnmnlkkkklkmlkkhkj----jhkhh---------kjkkm---lkkkklkkjkhhklml-ghkkk-----khhkhghggkjkllllllnmmmllmljkllllmnmlkkjkhg-----------------llmnmlkkjkhg\n' +
            '>NY905\n' +
            'glllnl-kkklkmllg-lmlkjhkklkkklkkghgghk-klnmnlkkkklkmlkkkkhhk---jkkhh---------kjkkml--kkkkkklkkjkkhkml-ghkkj--hhhkjhkkghggkjkllllllnmmmllmljkllllmnmlkkkhgl-----------------l-mnmlkkkhgh\n' +
            '>NauI\n' +
            'glllnlkkkklkmllg-lmlkjhkklkkklkkghgghk-klnnnlkkkklkmlkkkkkhhkjkkhkhh---------kjkkmlkkkkkkkkklkkhkhkml-ghkkk--khhhkhhkghggkjkllllllnmmmllmljkllllmnmlkkkkhg-----------------l-lmnmlkkkhg\n' +
            '>Pa1235\n' +
            'glllmlkkkklkmllgllmlkjhkklkkklkkghgghk-klnnlkkkkklkmlkjkkkkh---jkjkjhjhkjhkkmlkjkkkkjkkkkhjkjkjhjhkml-hkkkk---khhkhkghgggkjkllllll-----lgkjkllllmn----------------------------mlkkkkjhg\n' +
            '>Pa776\n' +
            'glllmljkkklkmllg-lmlkhhkklkkklkk-hgghk-klmnlkkkklkmlkjkkkkhk---jkjjh---------kjkkmljkkkjkkkklkkjjhkml-hjkkk---hhkhjkghgg---------------------------------------------------------------\n' +
            '>Pa903\n' +
            'glllmlkkkklkmllg-lmlkjhkklkkklkkghgghk-klmnlkkkklkmlkjkkkkhk---jkjjh---------kjkkmlkkkkkkkkkljkjjhkml-hkkkk---hhkhjkghgg---------------------------------------------------------------\n' +
            '>Pro12\n' +
            'glllml-hkklkmllgllmlkjhkklkkklkkghgghk-klmnlkkkklkmlhkkkkhjk---jkjjh---------kjkkml--hkkkkkkljkjjhkml-lhkkkkkhhhkjhkghgggkjkllllllnmmmllmljkllllmnmlk----------------------------kkkjhg\n' +
            '>Rou250\n' +
            'glllmlkkkklkmllgllmlkjhkklkkkl-kkhgghk-jlmnlkkkklkmlkjkkkkhj---kjkjjh--------kjkkml-kkkkkkkkljkjjhkml-hkkkk---khhkhkghgggkjkllllllnmmmmllmkkjklllmnmlkkkjhggkjklllllgkjklllllmnmlkkkjhg\n' +
            '>SCan7\n' +
            'glllml-kjklkmllg-lmlkjh--lkkkl-kghgghk-klnmnlkkkklkmlkkklkjk---hhkkk---------m-------lkkkkklkjkhhklml-ghkkj---hhhkhjkghggkjkllllllnmmmllmljkllllmnmlkkjkhg-----------------llmnmlkkjkhg\n' +
            '>Sal20\n' +
            'glllnl-kjklkmllg-lmlkjh--lkkkl-kghgghk-jklnmnlkkkklkmlkkkhkj---khkhh---------kjkk----mlkkkkklkkhkhklm-lghkk---jhhhkhkghggkjkllllnmmmllmmk----------------------------------------------\n' +
            '>Si29\n' +
            'glllml--kklkmllgllmlkjhkklkkklkkghgghk-klnnnlkkkklkmlkkkkkhj---kjjhh---------kjkkmlkkkkkkkkklkkjjhkml-hkkkk---khhhkhkghggklllllllmnmlkkk--------------------------------------------jhg\n' +
            '>Wo491\n' +
            'glllnl---klkmllg-lmlkjhkklkkkl-kghgghk-klnmnlkkkklkmlkkjkhhk---kjkhh---------k-------kkmlkkklkkjkhkml-ghkkk---hhhkhhkghggkjkllllllnmmmllmljkllllmnmlkkjhgl-------------------lmnmlkkjhg\n' +
            '>Wü165\n' +
            'glllnl---klkmllg-lmlkjh--lkkkl-kghgghk-jklnmnlkkkklkmlkkkhkk---hh--------------------kkkmlkkklkkkhkml-lhkk----hhhkhhkghggkjkllllllnmmmllmljklllmnl----------------------------------khg\n' +
            '>Zü106\n' +
            'glllmlkkkklkmllgllmlkjhkklkkklkkghgghk-klmnlkkkklkmlkkkkkhjk---jkjjh---------kjkkml--kkkkkkkljkjjhkmlghkkkk---hhkjhkghgg---------------------------------------------------------------\n',
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
