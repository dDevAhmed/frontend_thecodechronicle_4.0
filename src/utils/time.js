export const getTimeAgo = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);

    const diffInSeconds = Math.floor((now - date) / 1000);

    if (isNaN(diffInSeconds)) {
        return "Invalid Date";
    }

    if (diffInSeconds < 60) {
        return "Just now";
    } else if (diffInSeconds < 3600) { 
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) { 
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (date.toDateString() === now.toDateString()) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `Today at ${hours}:${minutes}`;
    } else {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
};