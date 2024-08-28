import * as React from 'react';

import axios from 'axios';

import EntityTile from './entity-tile';
import './nue-entity-explorer.css';
import { EntitiesPageResponseModel } from '../models/entities-page-response-model';
import { Entity } from '../models/entity';
import { Star } from 'lucide-react';

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function getEntities(): Promise<EntitiesPageResponseModel> {
    const request: RequestInfo = new Request('https://localhost:7283/GetEntities?pageIndex=0&itemsPerPage=100', {
        method: 'GET',
    })
      
    return fetch(request)
        .then(res => res.json())
        .then(res => {
            return res as EntitiesPageResponseModel
    });
}

const EntitiesExplorer = () => {
    const [state, setState] = React.useState<EntitiesPageResponseModel | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getAllInformation()
    }, []);

    const getAllInformation = async () => {
        setIsLoading(true);

        await axios.get("https://localhost:7283/GetEntities?pageIndex=0&itemsPerPage=100").then(response => {
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
