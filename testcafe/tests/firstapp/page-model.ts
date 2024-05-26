import { Selector } from 'testcafe';

class Page {

    addName: Selector;
    addParticipantCount: Selector;
    addButton: Selector;

    resultList: Selector;

    constructor() {
        this.addName = Selector('#add-name');
        this.addParticipantCount = Selector('#add-participant-count');
        this.addButton = Selector('#add-button');
        this.resultList = Selector('#result-list');
    }
}

export default new Page();