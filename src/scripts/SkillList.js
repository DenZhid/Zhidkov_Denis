export default class SkillList {
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