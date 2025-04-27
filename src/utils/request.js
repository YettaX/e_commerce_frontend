
export async function request(url, options = {}, token="") {

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    let response = await fetch(url, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      throw new Error('Unauthorized. Please log in again.');
    }

    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      throw new Error(data?.error || 'Request failed');
    }
    console.log("data")
    console.log(data)

    return data;
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
};