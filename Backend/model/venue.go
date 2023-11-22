package model

import (
	"strings"
	"BACKEND/data"
)

// Venue represents a venue entity with name and type.
type Venue struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Type     string `json:"type"`
	Date     string `json:"date"`
	Location string `json:"location"`
}

// SearchResult represents the format of the search result
type SearchResult struct {
	ID    string `json:"id"`
	Value string `json:"value"`
	Label string `json:"label"`
}

// FilterVenues filters venues based on the partial input.
func FilterVenues(query string) []SearchResult {
	var results []SearchResult

	// Iterate through the mock data source and check for matches
	for _, venue := range data.MockDataSource {
		if strings.Contains(strings.ToLower(venue.Name), strings.ToLower(query)) {
			// If the type contains the query, add it to the results
			result := SearchResult{
				ID:    venue.ID,      
				Value: venue.ID,      
				Label: venue.Name,    
			}
			results = append(results, result)
		}
	}

	return results
}
