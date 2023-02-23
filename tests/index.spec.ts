import 'mocha';
import { assert, expect } from 'chai';
import sinon from "sinon";
import axios from 'axios';
import { AI21 } from '../src';


describe('AI21', () => {
  describe('summarize', () => {
    let ai21:any;
    let axiosPostStub:any;

    beforeEach(() => {
      ai21 = new AI21('test_token');
      axiosPostStub = sinon.stub(axios, 'post');
    });

    afterEach(() => {
      axiosPostStub.restore();
    });

    it('should return a failed response if token is not initialized', async () => {
      ai21 = new AI21();
      const errorMessage = 'Token Not Initialized';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ type: 'text', text: 'Some text to summarize' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.undefined;
    });

    it('should return a failed response if data is not specified', async () => {
      const errorMessage = 'Data Not Specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize();

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.undefined;
    });

    it('should return a failed response if type is not specified in the data', async () => {
      const errorMessage = 'Type not specified';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ text: 'Some text to summarize' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.undefined;
    });

    it('should return a failed response if type is review and restaurant and review is not specified in the data', async () => {
      const errorMessage = 'Restaurant and Review must be specified if Summarize type is reviews';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ type: 'reviews' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.undefined;
    });

    it('should return a successful response if the request is successful', async () => {
      const responseData = { summaries : [{text : "Summarized Text goes here"}] };
      axiosPostStub.resolves({ data: responseData });

      const response = await ai21.summarize({ type: 'text', text: 'Some text to summarize' });

      expect(response.status).to.equal('success');
      expect(response.message).to.equal('Summaries Retrieved Successfully');
      expect(response.data).to.deep.equal(responseData);
    });

    it('should return a failed response if the request fails', async () => {
      const errorMessage = 'Failed to retrieve summaries';
      axiosPostStub.rejects(new Error(errorMessage));

      const response = await ai21.summarize({ type: 'text', text: 'Some text to summarize' });

      expect(response.status).to.equal('failed');
      expect(response.message).to.equal(errorMessage);
      expect(response.data).to.be.undefined;
    });
  });
});
