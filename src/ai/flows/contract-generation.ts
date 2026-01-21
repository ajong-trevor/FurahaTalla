'use server';
/**
 * @fileOverview Automatically generates contract drafts with payment terms that are tailored to the specifics of the deal,
 * crop type, current market conditions, and buyer/seller history.
 *
 * - generateContractDraft - A function that handles the contract draft generation process.
 * - ContractDraftInput - The input type for the generateContractDraft function.
 * - ContractDraftOutput - The return type for the generateContractDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContractDraftInputSchema = z.object({
  cropType: z.string().describe('The type of crop involved in the contract (e.g., tomato, maize, beans).'),
  expectedQuantity: z.number().describe('The expected quantity of the harvest.'),
  expectedHarvestDate: z.string().describe('The expected harvest date.'),
  location: z.string().describe('The location of the farm.'),
  minimumAcceptablePrice: z.number().describe('The minimum acceptable price for the crop.'),
  buyerDetails: z.string().describe('Details about the buyer, including their history and past deals.'),
  sellerDetails: z.string().describe('Details about the seller (farmer), including their history and past deals.'),
  currentMarketConditions: z.string().describe('Information about the current market conditions for the crop.'),
  pastDeals: z.string().optional().describe('Information about past deals related to the crop and parties.'),
});
export type ContractDraftInput = z.infer<typeof ContractDraftInputSchema>;

const ContractDraftOutputSchema = z.object({
  contractDraft: z.string().describe('The generated contract draft, including payment terms.'),
  paymentTermsExplanation: z.string().describe('An explanation of the payment terms, justifying them based on the input factors.'),
});
export type ContractDraftOutput = z.infer<typeof ContractDraftOutputSchema>;

export async function generateContractDraft(input: ContractDraftInput): Promise<ContractDraftOutput> {
  return generateContractDraftFlow(input);
}

const generateContractDraftPrompt = ai.definePrompt({
  name: 'generateContractDraftPrompt',
  input: {schema: ContractDraftInputSchema},
  output: {schema: ContractDraftOutputSchema},
  prompt: `You are an expert in agricultural contracts, specializing in forward contracts for smallholder farmers.

You will generate a contract draft based on the following information:

Crop Type: {{{cropType}}}
Expected Quantity: {{{expectedQuantity}}}
Expected Harvest Date: {{{expectedHarvestDate}}}
Location: {{{location}}}
Minimum Acceptable Price: {{{minimumAcceptablePrice}}}
Buyer Details: {{{buyerDetails}}}
Seller Details: {{{sellerDetails}}}
Current Market Conditions: {{{currentMarketConditions}}}
Past Deals: {{{pastDeals}}}

Based on this information, generate a contract draft including all necessary clauses and payment terms. Provide a detailed explanation of the payment terms, justifying them based on the input factors, including consideration of crop type, current market conditions, past deals, and buyer/seller history.

Contract Draft:
{{{contractDraft}}}

Payment Terms Explanation:
{{{paymentTermsExplanation}}}`,
});

const generateContractDraftFlow = ai.defineFlow(
  {
    name: 'generateContractDraftFlow',
    inputSchema: ContractDraftInputSchema,
    outputSchema: ContractDraftOutputSchema,
  },
  async input => {
    const {output} = await generateContractDraftPrompt(input);
    return output!;
  }
);
