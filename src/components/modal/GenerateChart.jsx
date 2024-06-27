import React, { useState } from 'react';
import { Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography, Button, Card } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChartLine, faUser, faBox, faUsers, faChartBar, faChartSimple } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons

const GenerateChart = ({ isOpen, handleClose }) => {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        // Your logic to handle submitting the message
    };

    // Mapping between label names and corresponding icons
    const iconMap = {
        Catalog: faBox,
        Orders: faChartLine,
        Customers: faUsers,
        // Add more mappings as needed
    };
    const menuItems = [
        { label: 'Catalog' },
        { label: 'Orders' },
        { label: 'Customers' },
        // Add more menu items as needed
    ];

    const typeOfCharts = [
        { label: 'Bar' },
        { label: 'Doughnut' },
        { label: 'Line' },

    ]

    const iconTypeChart = {
        Bar: faChartBar,
        Doughnut: faChartSimple,
        Line: faChartLine,
        // Add more mappings as needed
    };

    return (
        <Dialog open={isOpen} size="xs" handler={handleClose}>
            <div className="flex items-center justify-between">
                <DialogHeader className="flex flex-col items-start">
                    <Typography className="mb-1" variant="h4">
                        Generate Chart
                    </Typography>
                    <Typography variant="body" color="blue-gray" className='md:flex hidden'>
                        Create custom charts with AI-powered insights.
                    </Typography>
                </DialogHeader>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5 cursor-pointer"
                    onClick={handleClose}
                >
                    <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <DialogBody className="h-auto flex flex-col gap-10">
                {/* data sets */}
                <div>
                <Typography className="mb-1 text-black" variant="label">
                    Choose Data Sets
                </Typography>
                <div className='flex flex-wrap gap-2'>
                    {menuItems.map((item, index) => (
                        <Card
                            key={index}
                            className='flex items-center justify-center h-fit w-fit 
                            p-2 rounded-xl gap-2 cursor-pointer hover:bg-blue-gray-50 duration-300
                            transition-all'
                        >
                            {/* Render icon dynamically */}
                            <FontAwesomeIcon icon={iconMap[item.label]} className="h-5 w-5" />
                            <Typography className="mb-1 text-black" variant="label">
                                {item.label}
                            </Typography>
                        </Card>
                    ))}
                </div>
                </div>
                
                
                {/* chart type */}
                <div>
                <Typography className="mb-1 text-black" variant="label">
                    Type of Chart
                </Typography>
                <div className='flex flex-wrap gap-2'>
                    {typeOfCharts.map((item, index) => (
                        <Card
                            key={index}
                            className='flex items-center justify-center 
                            h-fit w-fit py-2 px-6 rounded-xl gap-2 cursor-pointer
                            hover:bg-blue-gray-50 duration-300
                            transition-all'
                        >
                            {/* Render icon dynamically */}
                            <FontAwesomeIcon icon={iconTypeChart[item.label]} className="h-5 w-5" />
                            <Typography className="mb-1 text-black" variant="label">
                                {item.label}
                            </Typography>
                        </Card>
                    ))}
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                <hr className='border-black border-1' />
                <Typography className="mb-1" variant="small">
                        Evolution prices in your marketplace
                    </Typography>
                    </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
                <Button variant="text" color="gray" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="gradient" color="gray" onClick={handleSubmit}>
                    Generate
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default GenerateChart;
