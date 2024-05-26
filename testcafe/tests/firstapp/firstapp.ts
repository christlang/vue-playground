import page from './page-model';

const cwd = process.cwd();

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `${cwd}/../first-app/index.html`;


test('start', async t => {
   await t
       .expect(page.resultList.visible).ok()
       .expect(page.resultList.value).eql('')
       .typeText(page.addName, 'test')
       .typeText(page.addParticipantCount, '3')
       .click(page.addButton)
       .expect(page.resultList.childElementCount).eql(5);
});

