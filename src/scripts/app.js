import Skill from './Skill.js'
import SkillList from './SkillList.js'
import SkillListController from './SkillListController.js'
import SkillListView from './SkillListView.js'
import changeTheme from './utils.js'

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("changeThemeButton").addEventListener("click", () => changeTheme())
})

const skillContainer = document.querySelector('.description-about-me-skills-section_skills');

let startSkillList = [
    new Skill('Java', 60),
    new Skill('Kotlin', 30),
    new Skill('Spring', 10),
    new Skill('SQL', 5)
];

const skillList = new SkillList([]);
const skillListView = new SkillListView(skillContainer);
const skillLitController = new SkillListController(skillList, skillListView);
for (let i = 0; i < startSkillList.length; i++) {
    skillLitController.addSkillToList(startSkillList[i]);
}
skillLitController.addNewSkillListener();



