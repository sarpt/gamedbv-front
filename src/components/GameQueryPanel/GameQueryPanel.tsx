import React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { RegionsMap, Regions } from '../../models/Regions';
import { PlatformsMap, Platforms } from '../../models/Platforms';

import { Panel } from '../Panel/Panel';

import { useStyles } from './GameQueryPanel.styles';

const INPUT_PLACEHOLDER = 'game name, description, id, etc.';
const INPUT_LABEL = 'Search query';

export type QueryPanelChanges = {
    query: string,
    regions: RegionsMap,
    platforms: PlatformsMap
};

type RegionCheckbox = {
    label: string,
    value: Regions
};
const regionsCheckboxes: RegionCheckbox[] = [
    {
        label: 'NTSC-U',
        value: Regions.NTSCU
    },
    {
        label: 'NTSC-J',
        value: Regions.NTSCJ
    },
    {
        label: 'PAL',
        value: Regions.PAL
    },
    {
        label: 'Other',
        value: Regions.OTHER
    }
];

type PlatformCheckbox = {
    label: string,
    value: Platforms
};
const platformsCheckboxes: PlatformCheckbox[] = [
    {
        label: 'GameCube',
        value: Platforms.NGC
    },
    {
        label: 'Wii',
        value: Platforms.WII
    }
];

type Props = {
    query: string,
    regions: RegionsMap,
    platforms: PlatformsMap,
    onChange: (changes: QueryPanelChanges) => void
};
export const GameQueryPanel: React.FC<Props> = ({
    query,
    regions,
    platforms,
    onChange
}) => {
    const styles = useStyles();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changes = {
            query,
            regions,
            platforms
        };

        switch(event.target.name) {
            case 'query':
                changes.query = event.target.value;
                break;
            case 'region':
                changes.regions = { ...changes.regions, [event.target.value]: event.target.checked };
                break;
            case 'platform':
                changes.platforms = { ...changes.platforms, [event.target.value]: event.target.checked };
                break;
            default:
        }

        onChange(changes);
    };

    const isRegionSet = (regionCheckbox: RegionCheckbox): boolean => {
        return regions[regionCheckbox.value];
    };

    const isPlatformSet = (platformCheckbox: PlatformCheckbox): boolean => {
        return platforms[platformCheckbox.value];
    };

    return (
        <Panel
            label="Game search"
        >
            <FormGroup row={ false }>
                <div className={ styles.row }>
                    <TextField
                        className={ styles.queryInput }
                        name='query'
                        onChange={ handleInputChange }
                        value={ query }
                        placeholder={ INPUT_PLACEHOLDER }
                        label={ INPUT_LABEL }
                    ></TextField>
                </div>
                <div className={ styles.row }>
                    <Typography variant="h6">
                        Regions:
                    </Typography>
                    {
                        regionsCheckboxes.map(regionsCheckbox => {
                            return (
                                <FormControlLabel
                                    key={ regionsCheckbox.value }
                                    control={
                                        <Checkbox
                                            checked={ isRegionSet(regionsCheckbox) }
                                            name="region"
                                            onChange={ handleInputChange }
                                            value={ regionsCheckbox.value }
                                        ></Checkbox>
                                    }
                                    label={ regionsCheckbox.label }
                                ></FormControlLabel>
                            );
                        })
                    }
                </div>
                <div className={ styles.row }>
                    <Typography variant="h6">
                        Platforms:
                    </Typography>
                    {
                        platformsCheckboxes.map(platformCheckbox => {
                            return (
                                <FormControlLabel
                                    key={ platformCheckbox.value }
                                    control={
                                        <Checkbox
                                            checked={ isPlatformSet(platformCheckbox) }
                                            name="platform"
                                            onChange={ handleInputChange }
                                            value={ platformCheckbox.value }
                                        ></Checkbox>
                                    }
                                    label={ platformCheckbox.label }
                                ></FormControlLabel>
                            );
                        })
                    }
                </div>
            </FormGroup>
        </Panel>
    );
}