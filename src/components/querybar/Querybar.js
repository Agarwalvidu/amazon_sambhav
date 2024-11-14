import React, { useState } from "react";
import { InputBox1, InputBox2, SubmitButton, FaqBox, FaqInsidBox } from './FaqElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const Bar = () => {
    return (
        <FaqBox>
            <FaqInsidBox>
                <InputBox1
                    type="email"
                    placeholder="Your Email..."
                    id='emailSection'
                    style={{ color: '#343a40', fontStyle: 'italic', fontSize: '0.77rem', font: 'Poppins' }}
                />
                <FaqInsidBox>
                    {/* Doubt Input */}
                    <InputBox2
                        type="text"
                        placeholder="Enter your query here..."
                        style={{ color: '#343a40', fontStyle: 'italic', fontSize: '0.9rem', font: 'Poppins' }}
                    />
                    <SubmitButton>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </SubmitButton>
                </FaqInsidBox>
            </FaqInsidBox>
        </FaqBox>
    );
};
