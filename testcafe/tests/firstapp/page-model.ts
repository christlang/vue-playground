import { Selector } from 'testcafe';

class Page {

    addName: Selector;
    addParticipantCount: Selector;
    addButton: Selector;

    constructor() {
        this.addName = Selector('#add-name');
        this.addParticipantCount = Selector('#add-participant-count');
        this.addButton = Selector('#add-button');
    }
}

export default new Page();