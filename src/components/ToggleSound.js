import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import useSound from 'use-sound';

import { toggleSound, selectSoundEnabled } from '../features/soundEnabled/soundEnabledSlice';
import volumeMuteSfx from '../sounds/volumeMute.mp3';
import volumeOnSfx from '../sounds/volumeOn.mp3';
import Button from './Button';
import VolumeOnIcon from './VolumeOnIcon';
import VolumeOffIcon from './VolumeOffIcon';
import VisuallyHidden from './VisuallyHidden';

function ToggleSound() {
    const soundEnabled = useSelector(selectSoundEnabled);
    const dispatch = useDispatch();
	const [volumeOn] = useSound(volumeOnSfx);
	const [volumeMute] = useSound(volumeMuteSfx);

	const handleClick = () => {
        dispatch(toggleSound());
		soundEnabled ? volumeMute() : volumeOn();
	};

	return (
        <ButtonWrapper>
            <Button onClick={handleClick}>
                {soundEnabled ? <VolumeOnIcon /> : <VolumeOffIcon />}
                <VisuallyHidden>
                    Turn sound {soundEnabled ? 'off' : 'on'}
                </VisuallyHidden>
            </Button>
        </ButtonWrapper>
	);
}

const ButtonWrapper = styled.div`
    position: absolute;
    top: 32px;
    right: 32px;
`;

export default ToggleSound;
