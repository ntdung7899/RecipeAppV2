
import imgChickenSoup from '../assets/chickensoup.jpg';
import imgVegetableSoup from '../assets/vegetablesoup.jpg';

import Images from '../Image/image'
const defaultInitialState = [
    {
        title: "Main dishes",
        data: [
            {
                id: 1,
                name: 'Chicken Soup',
                image: Images.chickenSoup,
                type: 'Soup',
                ingredients: '1 whole chicken (about 4 pounds), cut into pieces (including back), 8 cups water, Coarse salt, 3 medium onions, thinly sliced (4 cups), 2 celery stalks, sliced crosswise 1/4 inch thick, 4 garlic cloves, crushed, 6 medium carrots, sliced 1/2 inch thick',
                steps: 'Bring chicken, water, and 1 tablespoon salt to a boil in a large stockpot. Skim foam. Add onions, celery, and garlic. Reduce heat. Simmer, partially covered, for 30 minutes. Remove breast, and set aside. Add carrots. Simmer, partially covered, for 40 minutes. Remove remaining chicken; discard back and wings. Let cool slightly. Remove meat from bones, and cut into bite-size pieces. Stir in desired amount of chicken; reserve the rest for another use. Skim fat. Season with salt.',
                mode: 'Easy',
                time: '25 min',
                eval: 4.3,
            },
            {
                id: 2,
                name: 'Vegetable Soup',
                image: Images.vegetableSoup,
                type: 'Soup',
                ingredients: '2 Tbsp olive oil, 1 1/2 cups chopped yellow onion (1 medium), 2 cups peeled and chopped carrots (about 5), 1 1/4 cups chopped celery (about 3), 4 cloves garlic , minced, 4 (14.5 oz) cans low-sodium chicken broth* or vegetable broth, 2 (14.5 oz) cans diced tomatoes (undrained)',
                steps: 'Heat olive oil in a large pot over medium-high heat. Add onions, carrots, and celery and saute 4 minutes then add garlic and saute 30 seconds longer. Add in broth tomatoes, potatoes, parsley, bay leaves, thyme and season with salt and pepper to taste*. Bring to a boil, then add green beans. Reduce heat to medium-low, cover and simmer until potatoes are almst fully tender, about 20 - 30 minutes. Add corn and peas and cook 5 minutes longer. Serve warm.',
                mode: 'Medium',
                time: '11 min',
                eval: 3,
            }, {
                id: 3,
                name: 'Auuu Soup',
                image: Images.vegetableSoup,
                type: 'Soup',
                ingredients: '2 Tbsp olive oil, 1 1/2 cups chopped yellow onion (1 medium), 2 cups peeled and chopped carrots (about 5), 1 1/4 cups chopped celery (about 3), 4 cloves garlic , minced, 4 (14.5 oz) cans low-sodium chicken broth* or vegetable broth, 2 (14.5 oz) cans diced tomatoes (undrained)',
                steps: 'Heat olive oil in a large pot over medium-high heat. Add onions, carrots, and celery and saute 4 minutes then add garlic and saute 30 seconds longer. Add in broth tomatoes, potatoes, parsley, bay leaves, thyme and season with salt and pepper to taste*. Bring to a boil, then add green beans. Reduce heat to medium-low, cover and simmer until potatoes are almst fully tender, about 20 - 30 minutes. Add corn and peas and cook 5 minutes longer. Serve warm.',
                mode: 'Medium',
                time: '11 min',
                eval: 2,
            },
        ]
    },
];
export default defaultInitialState