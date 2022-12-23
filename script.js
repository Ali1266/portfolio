const btnSkills = document.querySelector('#btnSkills');
const btnPortfolio = document.querySelector('#btnPortfolio');

btnSkills.onclick = function() {
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('skills').style.display = 'block';
    document.getElementById('btnSkills').classList.add('active');
    document.getElementById('btnPortfolio').classList.remove('active');
}

btnPortfolio.onclick = function() {
    document.getElementById('portfolio').style.display = 'grid';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('btnSkills').classList.remove('active');
    document.getElementById('btnPortfolio').classList.add('active');
}