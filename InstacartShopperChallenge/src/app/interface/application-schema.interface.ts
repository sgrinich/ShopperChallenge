export interface ApplicationSchema {
    first_name: string;
    last_name: string;
    region?: string;
    phone: string;
    email: string;
    phone_type?: string;
    source?: string;
    over_21?: boolean;
    reason?: string;
    workflow_state?: string;
    created_at?: string;
    updated_at?: string;
}
