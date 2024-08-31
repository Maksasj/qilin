import * as React from 'react';

import axios from 'axios';

import './nue-entity-explorer.css';
import TagTile from './tag-tile';
import { TagsPageResponseModel } from '@/models/tags-page-response-model';

const MochiLogsExplorer = () => {
    const [state, setState] = React.useState<TagsPageResponseModel | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getAllInformation()
    }, []);

    const getAllInformation = async () => {
        setIsLoading(true);

        await axios.get("https://localhost:7283/GetTags?pageIndex=0&itemsPerPage=36").then(response => {
            setIsLoading(false);

            const allData: TagsPageResponseModel = response.data;
            setState(allData);
        })
    };

    if (isLoading || state === null) return <p>Loading...</p>

    return (
        <div className="nue-entity-explorer">
            {state.tags.map(tag => (
                <TagTile tag={tag} />
            ))}
        </div>
    )
};

export default MochiLogsExplorer;
