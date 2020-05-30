import { Endpoint } from './endpoint';

export interface RequestBenchmarkEntry {
    id: number;
    uri: string;
    minResponseTime: string;
    maxResponseTime: string;
    endpoints: Endpoint[];
}
