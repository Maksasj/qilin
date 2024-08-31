import * as React from 'react';

import axios from 'axios';

import EntityTile from './entity-tile';
import './nue-entity-explorer.css';
import { EntitiesPageResponseModel } from '../models/entities-page-response-model';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb';
import { NueContent } from './nue-content';
import { PaginationDemo } from '@/Pagination';
import EntityInformation from './entity-information';

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
        <div>
            <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]">
                <ResizablePanel defaultSize={50}>
                    <NueContent>
                        <div className="nue-entity-explorer">
                            {state.entities.map(entity => (
                                <EntityTile entity={entity} />
                            ))}
                        </div>

                        <PaginationDemo />
                    </NueContent>
                </ResizablePanel>
                <ResizableHandle />

                <ResizablePanel defaultSize={10}>
                    <EntityInformation />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
};

export default EntitiesExplorer;
