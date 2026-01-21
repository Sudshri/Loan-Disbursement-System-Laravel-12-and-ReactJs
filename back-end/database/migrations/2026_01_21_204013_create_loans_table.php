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
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('agent_id')->constrained();
            $table->decimal('loan_amount', 12, 2);
            $table->integer('tenure_days');
            $table->enum('emi_type', ['daily', 'weekly', '15_days', 'monthly']);
            $table->decimal('interest_rate', 5, 2)->default(10); // per 30 days
            $table->decimal('total_interest', 12, 2);
            $table->decimal('total_payable', 12, 2);
            $table->decimal('emi_amount', 12, 2);
            $table->enum('status', ['pending', 'approved', 'rejected', 'closed'])->default('pending');
            $table->date('status_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
