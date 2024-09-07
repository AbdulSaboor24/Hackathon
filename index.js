function toggleSkills() {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.classList.toggle('hidden');
    }
}
window.toggleSkills = toggleSkills;
