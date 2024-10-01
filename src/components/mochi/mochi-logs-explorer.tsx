import * as React from 'react';
import axios from 'axios';
import { LogMessageItemPageResponseModel } from '@/models/log-message-item-page-response-model';

const MochiLogsView = () => {
    const [state, setState] = React.useState<LogMessageItemPageResponseModel | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    const refreshInterval = 1000;

    React.useEffect(() => {
        const intervalId = setInterval(getAllInformation, refreshInterval);
        return () => clearInterval(intervalId);
    }, []);

    const getAllInformation = async () => {
        setIsLoading(true);

        await axios.get("https://localhost:7098/GetLogs?pageIndex=0&itemsPerPage=100").then(response => {
            setIsLoading(false);

            const allData: LogMessageItemPageResponseModel = response.data;
            setState(allData);
        })
    };

    if (isLoading && state === null)
        return <div>Loading</div>

    if (state !== null) {
        return (
            <div>
                <div className="nue-mochi-logs-explorer">
                    {state.messages.map((tag) => (
                        <div className="nue-mochi-log-message-base">
                            {tag.message}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const MochiLogsExplorer = () => {
    return (
        <MochiLogsView />
    )
};

export default MochiLogsExplorer;
