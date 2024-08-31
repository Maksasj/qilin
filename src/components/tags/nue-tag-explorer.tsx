import * as React from 'react';

import axios from 'axios';

import TagTile from './tag-tile';
import { TagsPageResponseModel } from '@/models/tags-page-response-model';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';
import { NueContent } from '../nue-content';
import { PaginationDemo } from '@/Pagination';

const TagExplorer = () => {
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
        <div>
            <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]">
                <ResizablePanel defaultSize={50}>
                    <NueContent>
                        <div className="nue-entity-explorer">
                            {state.tags.map(tag => (
                                <TagTile tag={tag} />
                            ))}
                        </div>

                        <PaginationDemo />
                    </NueContent>
                </ResizablePanel>
                <ResizableHandle />
            </ResizablePanelGroup>
        </div>
    )
};

export default TagExplorer;
