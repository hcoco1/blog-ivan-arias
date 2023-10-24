import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationItem({ to, icon: Icon, children }) {
    return (
        <li>
            <NavLink to={to} style={({ isActive, isPending, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "orange",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}>
                <Icon /> {children}
            </NavLink>
        </li>
    );
}

export default NavigationItem;
