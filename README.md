# Site de Réservation de Vol

Application Next.js pour la recherche et réservation de vols utilisant l'API AviationStack.

## Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```
NEXT_PUBLIC_FLIGHT_API_KEY=votre_cle_api_aviationstack
```

### Obtenir une clé API AviationStack

1. Rendez-vous sur [AviationStack](https://aviationstack.com/)
2. Créez un compte gratuit
3. Obtenez votre clé API
4. Ajoutez-la dans le fichier `.env.local`

## Fonctionnalités

- **Recherche de vols en temps réel** via l'API AviationStack
- **Fallback sur données simulées** si l'API n'est pas disponible
- **Filtrage avancé** par prix, escales, compagnies
- **Interface responsive** avec Tailwind CSS
- **Support des villes principales** avec mapping automatique vers les codes IATA

## Villes supportées

L'application supporte automatiquement les villes suivantes :
- Paris (CDG), Londres (LHR), New York (JFK)
- Los Angeles (LAX), Dubaï (DXB), Tokyo (NRT)
- Sydney (SYD), Francfort (FRA), Amsterdam (AMS)
- Madrid (MAD), Rome (FCO), Istanbul (IST)
- Et bien d'autres...

## Utilisation

1. Installez les dépendances : `npm install`
2. Configurez votre clé API dans `.env.local`
3. Lancez le serveur de développement : `npm run dev`
4. Recherchez des vols entre les villes supportées

## Architecture

- `src/services/flightApi.ts` - Interface avec l'API AviationStack
- `src/services/flightMapper.ts` - Transformation des données API
- `src/services/useFlights.ts` - Hook React pour la gestion des vols
- `src/components/` - Composants React de l'interface