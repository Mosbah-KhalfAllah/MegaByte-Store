import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  pcItems = [
    { title: 'Pack Gamer Pro', image: 'assets/pc1.jpeg', description: 'Expérience de jeu ultime avec des composants haute performance.' },
    { title: 'Ensemble Gaming Élite', image: 'assets/pc2.jpeg', description: 'Poussez votre expérience de jeu à un niveau supérieur avec cet ensemble puissant.' },
    { title: 'Configuration Pro Gamer', image: 'assets/pc3.jpeg', description: 'Conçue pour les joueurs professionnels, cette configuration améliore vos compétences de jeu.' },
    { title: 'Kit Essentiel Gaming', image: 'assets/pc4.jpeg', description: 'Tous les essentiels du jeu réunis pour une expérience immersive.' },
  ];
  ecranItems = [
    { title: 'Écran Gamer', image: 'assets/ecran1.avif', description: 'Une immersion totale avec des couleurs vibrantes et un taux de rafraîchissement élevé.' },
    { title: 'Écran Gaming', image: 'assets/ecran2.jpg', description: 'Découvrez des détails incroyables avec une résolution exceptionnelle et un design élégant.' },
    { title: 'Écran Haute Performance ', image: 'assets/ecran3.jpeg', description: 'Idéal pour les jeux rapides, cet écran offre une réactivité exceptionnelle et des images nettes.' },
    { title: 'Écran Avancé', image: 'assets/ecran4.png', description: 'Un écran conçu pour les joueurs sérieux, offrant des fonctionnalités avancées et une qualité d\'image supérieure.' },
  ];
  clavierItems = [
    { title: 'Clavier Gamer Pro', image: 'assets/clavier1.webp', description: 'Expérience de frappe ultime avec un design ergonomique pour les joueurs professionnels.' },
    { title: 'Clavier Mécanique Élite', image: 'assets/clavier2.jpg', description: 'Des commutateurs mécaniques avancés offrant une réponse rapide et précise pour une expérience de jeu exceptionnelle.' },
    { title: 'Clavier Rétro-éclairé RGB', image: 'assets/clavier3.jpg', description: 'Personnalisez votre expérience de jeu avec un éclairage RGB dynamique et des touches entièrement programmables.' },
    { title: 'Clavier Sans-fil Haute Performance', image: 'assets/clavier4.jpg', description: 'Liberté de mouvement sans compromis sur la performance, idéal pour les joueurs à la recherche de flexibilité.' },
  ];
  sourisItems = [
    { title: 'Souris Gaming Pro', image: 'assets/souris1.jpeg', description: 'Une souris de jeu professionnelle avec une précision exceptionnelle et un design ergonomique.' },
    { title: 'Souris Éclairée RGB', image: 'assets/souris2.jpeg', description: 'Illuminez votre configuration avec cette souris RGB offrant des effets lumineux personnalisables.' },
    { title: 'Souris sans Fil Avancée', image: 'assets/souris3.jpg', description: 'Liberté de mouvement et performance sans fil avec cette souris adaptée aux jeux rapides.' },
    { title: 'Souris Ergonomique Confort', image: 'assets/souris4.jpeg', description: 'Conçue pour un confort optimal, cette souris offre une prise en main ergonomique pour de longues sessions de jeu.' },
  ];
  
}