const exerciseData = [
    {
        ageGroup: 'Kids (5-12)',
        exercises: [
            {
                name: 'Jumping Jacks',
                description: 'A fun, full-body workout to get your energy up!',
                image: 'https://media.tenor.com/jMTPVEFua5YAAAAi/sport.gif'
            },
            {
                name: 'Skipping',
                description: 'Great cardio exercise that improves coordination.',
                image: 'https://media.tenor.com/9hI7LxQAJtcAAAAi/fitness-workout.gif'
            }
        ]
    },
    {
        ageGroup: 'Teens (13-19)',
        exercises: [
            {
                name: 'Push-Ups',
                description: 'Build upper body strength with this classic move.',
                image: 'https://media1.tenor.com/m/jOsgOa5TPogAAAAd/midoriya-midoriya-training.gif'
            },
            {
                name: 'Plank',
                description: 'Strengthen your core and improve stability.',
                image: 'https://media1.tenor.com/m/ldQ2mmihd4UAAAAd/planking-chikoo.gif'
            }
        ]
    },
    {
        ageGroup: 'Adults (20-60)',
        exercises: [
            {
                name: 'Yoga',
                description: 'Enhance flexibility and relieve stress.',
                image: 'https://i.pinimg.com/originals/c1/42/22/c142226087319868314c6c1d5c94f3a7.gif'
            },
            {
                name: 'Cycling',
                description: 'Boost cardiovascular health and muscle endurance.',
                image: 'https://media1.tenor.com/m/sL6hh_-rnzYAAAAd/ari-biking-ari-on-wheels.gif'
            }
        ]
    },
    {
        ageGroup: 'Seniors (60+)',
        exercises: [
            {
                name: 'Walking',
                description: 'Gentle exercise for maintaining mobility.',
                image: 'https://i.pinimg.com/originals/82/b2/83/82b283942d9bc9af9683acc007b8196c.gif'
            },
            {
                name: 'Meditation',
                description: 'Refresh the brain and relaxes the body.',
                image: 'https://i.pinimg.com/originals/80/dd/bd/80ddbd73909ca91d6897e24a98bc9377.gif'
            }
        ]
    }
];


const cardContainer = document.getElementById('exercise-cards');

exerciseData.forEach(group => {
    group.exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${exercise.image}" alt="${exercise.name}">
            <div class="content">
                <div class="age-group">${group.ageGroup}</div>
                <div class="exercise-name">${exercise.name}</div>
                <div class="description">${exercise.description}</div>
            </div>
        `;
        
        cardContainer.appendChild(card);
    });
});
