import * as React from 'react';

import axios from 'axios';

import EntityTile from './entity-tile';
import { EntitiesPageResponseModel } from '../../models/entities-page-response-model';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';
import { NueContent } from '../nue-content';
import { PaginationDemo } from '@/Pagination';
import SelectedEntityTab from './selected-entity-tab';
import './nue-entity-explorer.css';
import { Entity } from '@/models/entity';

const EntitiesExplorer = () => {
    const [state, setState] = React.useState<EntitiesPageResponseModel | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [selectedEntity, setSelectedEntity] = React.useState<Entity | null>(null);

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
        <div>
            <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]">
                <ResizablePanel defaultSize={50}>
                    <NueContent>
                        <div className="nue-entity-explorer">
                            {state.entities.map(entity => (
                                <EntityTile key={entity.id} entity={entity} setSelectedEntity={setSelectedEntity} />
                            ))}
                        </div>

                        <PaginationDemo />
                    </NueContent>
                </ResizablePanel>
                <ResizableHandle />

                {selectedEntity !== null && (
                    <ResizablePanel defaultSize={10}>
                        <SelectedEntityTab entity={selectedEntity} />
                    </ResizablePanel>
                )}

            </ResizablePanelGroup>
        </div>
    )
};

export default EntitiesExplorer;
