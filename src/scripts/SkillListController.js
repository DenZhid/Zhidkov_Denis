import Skill from "./Skill";

export default class SkillListController {

    constructor(skillList, skillListView) {
        this.skillList = skillList;
        this.skillListView = skillListView;
    }

    addSkillToList(skill) {
        this.skillList.addSkill(skill);
        this.skillListView.redrawSkill(skill);
        document.getElementById(skill.name).addEventListener("click", () => this.removeSkillFromList(skill));
    }

    addNewSkillListener() {
        document.getElementById("add-skill-button").addEventListener("click", () => {
            let enteredName = document.querySelector('.description-about-me-skills-section_skill-adder_skill-name');
            let enteredValue = document.querySelector('.description-about-me-skills-section_skill-adder_skill-value');
            if (enteredName.value === "" || enteredName.value.includes('<') || enteredName.value.includes('>')
                || enteredValue.value === "" || enteredValue.value < 0 || enteredValue.value > 100 || isNaN(enteredValue.value)) {
                alert("Entered wrong values")
                return;
            }
            let skill = new Skill(enteredName.value, enteredValue.value);
            if (this.skillList.checkSkill(skill)) {
                alert("This skill already exits")
                return;
            }
            this.addSkillToList(skill);
        });
    }

    removeSkillFromList(skill) {
        this.skillList.removeSkill(skill);
        this.skillListView.redrawRemoved(skill);
    }
}
