interface Company {
    id: number,
    name: string,
    description: string,
    website: string,
    sector: string,
    address: string,
    postcode: string,
    headcount: number,
    property_size: number,
    lease_expiry_date: string,
    lease_length: number,
    lease_type: string,
    lease_price: number,
    preferred_contract_type: string,
    preferred_lease_length: number,
    maximum_lease_length: number,
    move_date: string,
    move_score: number,
    preferred_budget: number,
    preferred_size: number,
    preferred_number_of_desks: number,
    preferred_number_of_meeting_rooms: number,
    preferred_primary_location: string,
    preferred_secondary_location: string,
    created_at: string,
    updated_at: string
}

export function fetchCompanies() {
    return fetch('http://localhost:4000/companies')
}