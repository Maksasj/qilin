import * as React from 'react';

import axios from 'axios';

import EntityTile from './entity-tile';
import './nue-entity-explorer.css';
import { EntitiesPageResponseModel } from '../models/entities-page-response-model';

const EntitiesExplorer = () => {
    const [state, setState] = React.useState<EntitiesPageResponseModel | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getAllInformation()
    }, []);

    const getAllInformation = async () => {
        setIsLoading(true);

        await axios.get("https://localhost:7283/GetEntities?pageIndex=0&itemsPerPage=36").then(response => {
            setIsLoading(false);
            
            const allData: EntitiesPageResponseModel = response.data;
            setState(allData);
        })
    };

    if (isLoading || state === null) return <p>Loading...</p>

    return (
        <div className="nue-entity-explorer">
            {state.entities.map(entity => (
                <EntityTile entity = {entity} />
            ))}
        </div>
    )
};

export default EntitiesExplorer;
