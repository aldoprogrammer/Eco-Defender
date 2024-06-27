import React, { useState } from "react";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import DataTabsCatalog from "./TabsCatalog/DataTabsCatalog";
import TabsPopularCatalog from "./TabsCatalog/TabsPopularCatalog";
import TabsChartCatalog from "./TabsCatalog/TabsChartCatalog";
import { useAldoAlert } from "aldo-alert";
import { useNavigate } from "react-router-dom";

const TABS = [
    {
        label: "Data",
        value: "Data",
    },
    {
        label: "Popular",
        value: "Popular",
    },
    {
        label: "Chart & Insights",
        value: "Chart",
    },
];

const initialTodos = [
    { id: 1, text: 'Clean the living room', completed: false },
    { id: 2, text: 'Pick up trash in the park', completed: false },
    { id: 3, text: 'Organize the kitchen', completed: false },
    { id: 4, text: 'Recycle plastics and paper', completed: false },
    { id: 5, text: 'Plant trees in the neighborhood', completed: false },
];

export function DataCatalog() {
    const { showAldoAlert } = useAldoAlert();
    const [selectedTab, setSelectedTab] = useState("Data");
    const [todos, setTodos] = useState(initialTodos);
    const navigate = useNavigate();

    const handleTabChange = (value) => {
        console.log("Selected Tab:", value);
        setSelectedTab(value);
    };

    const toggleTodoCompletion = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleSubmit = () => {
        console.log("Todos submitted:", todos);
        showAldoAlert('Your city has been aways from alien!', 'warning');
        navigate('/map');
    };

    return (
        <Card className="h-full w-full shadow-none">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-0 flex md:flex-row flex-col items-left md:items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Task to swipe away alien
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal w-4/5">
                        Clean your home and city to protect Earth from alien invaders. Turn environmental stewardship into an exciting adventure!
                        </Typography>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        {/* Additional controls or inputs can go here */}
                    </div>
                </div>
            </CardHeader>
            <div className="p-4">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Todo
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={todo.completed ? 'line-through' : ''}>
                                        {todo.text}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="text-indigo-600 hover:text-indigo-900"
                                        onClick={() => toggleTodoCompletion(todo.id)}
                                    >
                                        {todo.completed ? 'Undo' : 'Complete'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-end">
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </Card>
    );
}
