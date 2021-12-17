(function () {
    'use strict';

    class Skill {
        constructor(name, value) {
            this.name = name;
            this.value = value;
        }
    }

    class SkillList {
        constructor(skillList) {
            this.skillList = skillList;
        }

        addSkill(skill) {
            this.skillList.push(skill);
        }

        removeSkill(skill) {
            this.skillList.filter((f) => {return f !== skill});
        }

        checkSkill(skill) {
            for (let i = 0; i < this.skillList.length; i++) {
                if (this.skillList[i].name === skill.name) {
                    return true;
                }
            }
            return false;
        }
    }

    class SkillListController {

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
                new FormData(form);
                let enteredName = form.querySelector('[name = "skill-name"]');
                let enteredValue = form.querySelector('[name = "skill-value"]');
                if (enteredName.value === "" || enteredName.value.includes('<') || enteredName.value.includes('>')
                    || enteredValue.value === "" || enteredValue.value < 0 || enteredValue.value > 100 || isNaN(enteredValue.value)) {
                    alert("Entered wrong values");
                    return;
                }
                let skill = new Skill(enteredName.value, enteredValue.value);
                if (this.skillList.checkSkill(skill)) {
                    alert("This skill already exits");
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

    class SkillListView {

        constructor(skillContainer) {
            this.skillContainer = skillContainer;
        }

        redrawSkill(skill) {
            const element = document.createElement("section");
            element.classList.add("description-about-me-skills-section_skills_skill-" + skill.name);
            element.innerHTML =
                `<div class="skill_name"> ${skill.name} </div> 
            <progress max="100" value=${skill.value}>' 
            </progress> 
            <button id ="${skill.name}" class="skill_delete-button">-</button>`;
            this.skillContainer.appendChild(element);
        }

        redrawRemoved(skill) {
            this.skillContainer.querySelector(".description-about-me-skills-section_skills_skill-" + skill.name).remove();
        }
    }

    function changeTheme() {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("changeThemeButton").addEventListener("click", () => changeTheme());
    });

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

})();
