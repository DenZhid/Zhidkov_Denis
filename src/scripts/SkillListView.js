export default class SkillListView {

    constructor(skillContainer) {
        this.skillContainer = skillContainer;
    }

    redrawSkill(skill) {
        const element = document.createElement("section");
        element.classList.add("description-about-me-skills-section_skills_skill-" + skill.name);
        element.innerHTML =
            `<div class="description-about-me-skills-section_skills_skill_name"> ${skill.name} </div> 
            <progress class="description-about-me-skills-section_skills_skill_value" max="100" value=${skill.value}>' 
            </progress> 
            <button id ="${skill.name}" class="description-about-me-skills-section_skills_skill_delete_button">-</button>`;
        this.skillContainer.appendChild(element);
    }

    redrawRemoved(skill) {
        this.skillContainer.querySelector(".description-about-me-skills-section_skills_skill-" + skill.name).remove();
    }
}