<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('agent_code')->unique();
            $table->string('mobile')->unique();
            $table->string('email')->nullable();
            $table->string('password');
            $table->string('pan_card')->nullable();
            $table->string('pan_card_image_path')->nullable();
            $table->string('aadhaar_card')->nullable();
            $table->string('aadhaar_card_image_path')->nullable();
            $table->string('addhar_back_image_path')->nullable();
            $table->string('cancelled_cheque_image_path')->nullable();
            $table->decimal('commission_percent', 5, 2)->default(0);
            $table->enum('status', ['pending', 'approved', 'rejected','blocked'])->default( 'pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agents');
    }
};
