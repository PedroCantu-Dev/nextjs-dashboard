import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function seedDatabase() {
    try {
        // Seed users
        const { data: users, error: usersError } = await supabase
            .from('users')
            .insert([
                { name: 'John Doe', email: 'john@example.com' },
                { name: 'Jane Smith', email: 'jane@example.com' },
            ]);

        if (usersError) throw usersError;

        console.log('Seeded users:', users);

        // Seed customers
        const { data: customers, error: customersError } = await supabase
            .from('customers')
            .insert([
                { name: 'Acme Corp', contact_email: 'contact@acme.com' },
                { name: 'Globex Inc', contact_email: 'info@globex.com' },
            ]);

        if (customersError) throw customersError;

        console.log('Seeded customers:', customers);

        // Seed invoices
        const { data: invoices, error: invoicesError } = await supabase
            .from('invoices')
            .insert([
                { customer_id: customers[0].id, amount: 500, status: 'paid' },
                { customer_id: customers[1].id, amount: 300, status: 'pending' },
            ]);

        if (invoicesError) throw invoicesError;

        console.log('Seeded invoices:', invoices);

        // Seed revenue
        const { data: revenue, error: revenueError } = await supabase
            .from('revenue')
            .insert([
                { month: 'January', total: 800 },
                { month: 'February', total: 1200 },
            ]);

        if (revenueError) throw revenueError;

        console.log('Seeded revenue:', revenue);

        console.log('Database seeding completed successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seedDatabase();