document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("changeThemeButton").addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
    })
});

class Skill {

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class SkillPanel {

    constructor(skillsList, skillsContainer) {
        this.skillsContainer = skillsContainer;
        this.skillsList = skillsList;
        this.drawSkillPanel()
    }

    drawSkillPanel() {
        for (let i = 0; i < this.skillsList.length; i++) {
            this.addToSkillPanel(this.skillsList[i]);
        }
    }

    addToSkillPanel(skill) {
        const element = document.createElement("section");
        element.classList.add("description-about-me-skills-section_skills_skill-" + skill.name);
        element.innerHTML =
            `<div class="description-about-me-skills-section_skills_skill_name"> ${skill.name} </div> 
            <progress class="description-about-me-skills-section_skills_skill_value" max="100" value=${skill.value}>' 
            </progress> 
            <button id ="${skill.name}" class="description-about-me-skills-section_skills_skill_delete_button">-</button>`;
        this.skillsContainer.appendChild(element);
        document.getElementById(skill.name).addEventListener("click", () => this.removeFromSkillPanel(skill));
    }

    removeFromSkillPanel(skill) {
        this.skillsContainer.querySelector(".description-about-me-skills-section_skills_skill-" + skill.name).remove();
    }
}

const skillContainer = document.querySelector('.description-about-me-skills-section_skills');

let skillList = [
    new Skill('Java', 60),
    new Skill('Kotlin', 30),
    new Skill('Spring', 10),
    new Skill('SQL', 5)
];

const skillPanel = new SkillPanel(skillList, skillContainer);

document.getElementById("add-skill-button").addEventListener("click", () => {
    let enteredName = document.querySelector('.description-about-me-skills-section_skill-adder_skill-name');
    let enteredValue = document.querySelector('.description-about-me-skills-section_skill-adder_skill-value');
    if (enteredName.value === "" || enteredName.value.includes('<') || enteredName.value.includes('>')
        || enteredValue.value === "" || enteredValue.value < 0 || enteredValue.value > 100 || isNaN(enteredValue.value))
    {
        alert("Entered wrong values")
        return;
    }
    for (let i = 0; i < skillList.length; i++) {
        let skill = skillList[i];
        if (skill.name === enteredName.value) {
            alert("This skill already exits")
            return;
        }
    }
    let skill = new Skill(enteredName.value, enteredValue.value);
    skillList.push(skill);
    skillPanel.addToSkillPanel(skill);
})