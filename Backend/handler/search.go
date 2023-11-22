// handler/search.go
package handler

import (
	"encoding/json"
	"net/http"
	"BACKEND/model"
)

// SearchHandler handles the search input and returns suggestions.
func SearchHandler(w http.ResponseWriter, r *http.Request) {
	// Parse the query parameter from the request URL
	query := r.URL.Query().Get("query")

	if query == "" {
		// Return an empty JSON array
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte("[]"))
		return
	}
	
	// Filter venues based on the partial input
	results := model.FilterVenues(query)

	// Check if there are no results
	if len(results) == 0 {
		// Return an empty JSON array
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte("[]"))
		return
	}

	// Convert results to JSON and send the response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(results)
}
