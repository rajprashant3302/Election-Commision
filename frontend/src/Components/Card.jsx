import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ imageurl, title, url, color, isLast }) => {
    return (
        <div
            className="card text-center border-0"
            style={{
                width: '210px',
                flex: '0 0 auto',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #f6fcfc, #edfafa, #eaf9f7, #eaf8f6, #e8f7f5)',
                backgroundSize: '300% 300%',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, background-position 1s ease',
                marginRight: isLast ? '0' : '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.07)';
                e.currentTarget.style.boxShadow = `0 10px 24px ${color}55`;
                e.currentTarget.style.backgroundPosition = '100% 0%';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                e.currentTarget.style.backgroundPosition = '0% 100%';
            }}
        >
            <Link
                to={url}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
                <div className="d-flex flex-column align-items-center pt-3">
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                            border: `5px solid ${color}`,
                            height: '160px',
                            width: '160px',
                            overflow: 'hidden',
                            boxShadow: `0 4px 12px ${color}33`,
                            transition: 'box-shadow 0.3s ease'
                        }}
                    >
                        <img
                            src={imageurl}
                            alt={title}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.35s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.10)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                    </div>
                </div>
                <div className="p-3">
                    <h6 className="fw-bold m-0" style={{ color: color }}>{title}</h6>
                </div>
            </Link>
        </div>
    );
};
