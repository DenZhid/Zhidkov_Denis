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
        const form = document.querySelector('form');
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const data = new FormData(form);
            let enteredName = form.querySelector('[name = "skill-name"]');
            let enteredValue = form.querySelector('[name = "skill-value"]');
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
