export default class SkillListView {

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