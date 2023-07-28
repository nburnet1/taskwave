import {Wave} from './Waves/Wave';
import {Task} from './Tasks/Task';


export const MOCK_WAVES : Wave[] = [
    new Wave({
        id: 1,
        title: 'Wave 1',
        description: 'This is the first wave',
        tasks: [
            new Task({
                id: 1,
                title: 'Task 1',
                description: 'This is the first task',
                status: 'New'
            }),
            ],
        isActive: true,
        startDate: new Date('2020-01-01'),
        endDate: new Date('2020-01-31')
    }),
    new Wave({
        id: 2,
        title: 'Wave 2',
        description: 'This is the second wave',
        tasks: [
            new Task({
                id: 2,
                title: 'Task 2',
                description: 'This is the second task',
                status: 'On Hold'
            }),
            ],
        isActive: false,
        startDate: new Date('2020-02-01'),
        endDate: new Date('2020-02-28')
    }),
    new Wave({
        id: 3,
        title: 'Wave 3',
        description: 'This is the third wave',
        tasks: [
            new Task({
                id: 3,
                title: 'Task 3',
                description: 'This is the third task',
                status: 'In Progress'
            })
        ],
        isActive: false,
        startDate: new Date('2020-03-01'),
        endDate: new Date('2020-03-31')
    }),
    new Wave({
        id: 4,
        title: 'Wave 4',
        description: 'This is the fourth wave',
        tasks: [
            new Task({
                id: 4,
                title: 'Task 4',
                description: 'This is the fourth task',
                status: 'Completed'
            }),
            new Task({
                id: 5,
                title: 'Task 5',
                description: 'This is the fifth task',
                status: 'In Progress'
            }),
        ],
        isActive: true,
        startDate: new Date('2020-04-01'),
        endDate: new Date('2020-04-30')
    }),
    ];

export default MOCK_WAVES;
