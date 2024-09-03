    async function fetchHello() {
        try {
            const response = await fetch('/api/test-api');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.error('Error fetching the API:', error);
        }
    }
