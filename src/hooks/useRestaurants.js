import { useState, useEffect } from 'react';
import { restaurantAPI } from '../services/api';

export const useRestaurants = (filters = {}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await restaurantAPI.getAll(filters);
        setRestaurants(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch restaurants');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [JSON.stringify(filters)]);

  return { restaurants, loading, error, refetch: () => fetchRestaurants() };
};

export const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await restaurantAPI.getById(id);
        setRestaurant(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch restaurant');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  return { restaurant, loading, error };
};

export const useRestaurantMenu = (restaurantId, filters = {}) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      if (!restaurantId) return;
      
      try {
        setLoading(true);
        const response = await restaurantAPI.getMenu(restaurantId, filters);
        setMenuItems(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch menu');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId, JSON.stringify(filters)]);

  return { menuItems, loading, error };
};