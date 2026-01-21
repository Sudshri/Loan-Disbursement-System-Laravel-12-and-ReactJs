<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'email' => 'super@admin.com',
            'password' => 'password',
            'mobile_number' => '9876543210',
            'role' => 'super_admin',
        ]);
    }
}
