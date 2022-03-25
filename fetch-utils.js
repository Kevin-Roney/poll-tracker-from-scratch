
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1laG9wcHVhdWhwd3dvZmVmcGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzIzMzEsImV4cCI6MTk2MzU0ODMzMX0.SdElfTGiCmXLkKax2vtO9-vVw5ioXrQMRkH28fDYKY8';
const SUPABASE_URL = 'https://mehoppuauhpwwofefpdc.supabase.co';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(question, option1, option2, count1, count2) {
    const response = await client
        .from('polling_station')
        .insert([
            {
                poll_question: question,
                poll_option_1: option1,
                poll_option_2: option2,
                option_1_count: count1,
                option_2_count: count2
            }
        ]);
    return response.data;
}

export async function getPolls() {
    const response = await client 
        .from('polling_station')
        .select('*');
    return response.data;
}

export async function signUp(someEmail, somePassword) {
    const response = await client.auth.signUp({
        email: someEmail,
        password: somePassword,
    });
    return response.user;
}

export async function signIn(someEmail, somePassword) {
    const response = await client.auth.signIn({
        email: someEmail,
        password: somePassword,
    });
    return response.user;
}

export function getUser() {
    const user = client.auth.user();
    return user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export function redirectIfNotLoggedIn() {
    const user = getUser();
    if (!user) {
        window.location.href = '../';
    }
}