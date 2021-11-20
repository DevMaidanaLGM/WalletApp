<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class TransfersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transfers')->insert([
            [

            'description' => 'Salary',
            'amount' => '4800',
            'wallet_id' => 1,
            'created_at'=>date("y-m-d H:i:s"),
            'updated_at'=>date("y-m-d H:i:s")

        ], [
            'description'
             => 'Rent',
            'amount' => '-1200',
            'wallet_id' => 1,
            'created_at'=>date("y-m-d H:i:s"),
            'updated_at'=>date("y-m-d H:i:s")
         ]
        ]);
    }
}
