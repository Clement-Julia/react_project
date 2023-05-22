import logo from './logo.svg'
import './App.css'
import Layout from './components/layout/layout'
import Projet from './components/layout/projet'
import Section from './components/layout/section'
import Card from './components/layout/card'

function App() {
	return (
		<div className='container mt-5'>
			<div className='row justify-content-around'>
                <Card id="self" className='card px-0 col-5 mt-5' titre='À propos de moi'>
					<p>Je me présente, moi c'est Clément Julia, j'ai 20 ans. Passioné de l'informatique depuis le lycée je me suis rapidement orienté vers ce domaine.</p>
					<p>Je suis actuellement en 3ème année de BACHELOR FullStack & DevOps à l'école IPSSI de Saint-Quentin en Yvelines.</p>
                </Card>
                <Card id="experience" className='card px-0 col-5 mt-5' titre='Expériences'>
                    <p>STAGE CHEZ AFFINISOFT - 8 SEMAINES</p>
					<div>Environnement technique : HTML, CSS, Drupal 8, PHP, Twig, JS</div>
					<p>ALTERNANCE CHEZ EBP - Informatique</p>
					<div>Environnement technique : PHP, CSS, Symfony, JS</div>
                </Card>
                
                <Card id="formation" className='card px-0 col-5 mt-5' titre='Formations'>
					<div>Lyçée : Louis de Broglie</div>
					<div>Ecole Post-Bac : Ipssi (bts, bachelor)</div>
                </Card>
                <Card id="passion" className='card px-0 col-5 mt-5' titre='Passions'>
					<ul className='list-group'>
						<li className='list-group-item list-group-item-action'>Jeux-vidéo</li>
						<li className='list-group-item list-group-item-action'>Développement</li>
						<li className='list-group-item list-group-item-action'>Voyage</li>
						<li className='list-group-item list-group-item-action'>Lecture</li>
					</ul>
                </Card>
                <Card id="competence" className='card px-0 col-5 my-5' titre='Compétences'>
					<ul className='list-group'>
						<li className='list-group-item list-group-item-action'>PHP</li>
						<li className='list-group-item list-group-item-action'>JS</li>
						<li className='list-group-item list-group-item-action'>CSS</li>
						<li className='list-group-item list-group-item-action'>Js</li>
						<li className='list-group-item list-group-item-action'>JQuery</li>
						<li className='list-group-item list-group-item-action'>Symfony</li>
						<li className='list-group-item list-group-item-action'>React</li>
					</ul>
                </Card>
				{/* <Section className='self mt-5' titre='À propos de moi'>
					<p>Je me présente, moi c'est Clément Julia, j'ai 20 ans. Passioné de l'informatique depuis le lycée je me suis rapidement orienté vers ce domaine.</p>
					<p>Je suis actuellement en 3ème année de BACHELOR à l'école IPSSI de Saint-Quentin en Yvelines.</p>
				</Section> */}
				{/* <Section className='experience mt-5' titre='Expériences'>
					<p>STAGE CHEZ AFFINISOFT - 8 SEMAINES</p>
					<div>Environnement technique : HTML, CSS, Drupal 8, PHP, Twig, JS</div>
					<p>ALTERNANCE CHEZ EBP - Informatique</p>
					<div>Environnement technique : PHP, CSS, Symfony, JS</div>
				</Section> */}
				{/* <Section className='formation mt-5' titre='Formations'>
					<div>Lyçée : Louis de Broglie</div>
					<div>Ecole Post-Bac : Ipssi (bts, bachelor)</div>
				</Section>
				<Section className='passion mt-5' titre='Passions'>
					<ul className='list-group'>
						<li className='list-group-item'>Jeux-vidéo</li>
						<li className='list-group-item'>Développement</li>
						<li className='list-group-item'>Voyage</li>
						<li className='list-group-item'>Lecture</li>
					</ul>
				</Section> */}
				{/* <Section className='competence mt-5' titre='Compétences'>
					<ul className='list-group'>
						<li className='list-group-item'>PHP</li>
						<li className='list-group-item'>JS</li>
						<li className='list-group-item'>CSS</li>
						<li className='list-group-item'>Js</li>
						<li className='list-group-item'>JQuery</li>
						<li className='list-group-item'>Symfony</li>
						<li className='list-group-item'>React</li>
					</ul>
				</Section> */}
			</div>

			{/* <Layout>
                <p>Je suis dans la balise main</p>
            </Layout> */}

			{/* <Projet nom='Projet' img={logo} lien='localhost:3000' /> */}
		</div>
	)
}

export default App
