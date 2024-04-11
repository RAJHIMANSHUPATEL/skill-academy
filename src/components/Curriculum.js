import React, { useContext } from 'react';
import './Curriculum.css';
import { AppContext } from '../hooks/context';
import modules from '../data/modules';

const Curriculum = () => {
    const { toggleModuleState, toggleModule } = useContext(AppContext);

    return (
        <div className="curriculum">
            <div className="curriculum-content section-center">
                <h3>Curriculum</h3>
                <div className="accordions">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className="modules"
                            onClick={() => toggleModule(module.id)}
                        >
                            <div className="header">
                                <p>{module.module}</p>
                                <h4>{module.title}</h4>
                            </div>
                            <div
                                className={`${toggleModuleState[module.id]
                                        ? 'showModule header-content'
                                        : 'header-content'
                                    }`}
                            >
                                <ul>
                                    {module.content.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className='btn button'>Download Curriculum</button>
        </div>
    );
};

export default Curriculum;